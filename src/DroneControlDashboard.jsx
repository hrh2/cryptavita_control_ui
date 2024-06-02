import { useState, useEffect, useCallback } from 'react';
import { FaPlay, FaStop, FaHome, FaArrowLeft, FaArrowRight, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import io from 'socket.io-client';
import { APIProvider, Map, Pin, AdvancedMarker, useMap } from '@vis.gl/react-google-maps';
import Swal from 'sweetalert2';
import { GiDeliveryDrone } from "react-icons/gi";
import MapContainer from "./DroneLocation"
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AiOutlineClear } from "react-icons/ai";

const server = 'https://drone-control-api-ztb6.onrender.com';
const socket = io(server);

const DroneControlDashboard = () => {
  const position = { lat: -1.6006031230495232, lng: 29.515005049259088 };
  const [launchedDrones, setLaunchedDrones] = useState([]);
  const [droneId, setDroneId] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const [messages, setMessages] = useState([]);
  const [selectedDrone, setSelectedDrone] = useState(null);
  const map = useMap(); // State to hold the map instance

  useEffect(() => {
    socket.on('adminNotification', (data) => {
      if (data.length !== 0) {
        setLaunchedDrones(data);
      }
    });

    socket.on('new_message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      setShowPopup(true); // Show popup with new message
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('adminNotification');
    };
  }, []);

  const sendCommand = (command,msg) => {
    if (droneId) {
      Swal.fire({
        title: 'Are you sure?',
        text: `You want  to '${msg}' on drone ${droneId}?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, send it!',
        cancelButtonText: 'No, cancel!',
      }).then((result) => {
        if (result.isConfirmed) {
          socket.emit('sendCommand', { drone_id: droneId, command: command });
          Swal.fire('Sent!', `Command '${command}' sent to drone ${droneId}.`, 'success');
        }
      });
    } else {
      Swal.fire('Error!', 'Please select a drone ID.', 'error');
    }
  };

  const sendControlCommand = (command) => {
    if (droneId) {
      socket.emit('sendCommand', { drone_id: droneId, command: command });
    }
  };
  
  const clearhistories = ()=>{
    socket.emit('clear_launched_drones')
    window.location.reload();
  }

  const handleClick = useCallback((ev) => {
    if (!map) return;
    if (!ev.latLng) return;
    console.log('marker clicked:', ev.latLng.toString());
    map.panTo(ev.latLng);
  }, [map]);

  const handleMapClick = (event) => {
    console.log("Map clicked at:", event.latLng.toString());
    // Additional functionality can be added here, such as adding a marker at the clicked location
  };

  return (
    <div className="container mx-auto p-6">
    {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 w-[25rem] mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <button
              className="mt-4 hover:text-blue-600 text-gray-500 font-bold py-2 px-4 rounded"
              onClick={() => setShowPopup(false)}
            >
              <IoMdCloseCircleOutline size={16} />
            </button>
            <p className="text-lg flex gap-2">{messages[messages.length - 1].message} on <GiDeliveryDrone size={25}/> </p>
          </div>
        </div>
      )}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex py-2">Automatically Launched Drones <AiOutlineClear  className=' cursor-pointer' onClick={clearhistories} size={31}/></h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md ">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-gray-200">...</th>
                <th className="px-4 py-2 bg-gray-200">Drone ID</th>
                <th className="px-4 py-2 bg-gray-200">Destination</th>
                <th className="px-4 py-2 bg-gray-200">Latitude</th>
                <th className="px-4 py-2 bg-gray-200">Longitude</th>
              </tr>
            </thead>
            <tbody>
              {launchedDrones.length !== 0 ? launchedDrones.map((drone, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">
                    <GiDeliveryDrone size={25} />
                  </td>
                  <td className="border px-4 py-2">{drone.drone_id}</td>
                  <td className="border px-4 py-2">{drone.district ? drone.district.name : 'N/A'}</td>
                  <td className="border px-4 py-2">{drone.district?.latitude ?? 'N/A'}</td>
                  <td className="border px-4 py-2">{drone.district?.longitude ?? 'N/A'}</td>
                </tr>
              )) : <></>}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mb-8 h-[50vh] w-full">
      {!selectedDrone ? (
  <APIProvider apiKey={'AIzaSyBvvU6jaJbByhHnsqL2xrCT3FprNdyG6kc'}>
    <Map
      defaultZoom={7}
      defaultCenter={position}
      mapId='DEMO_MAP_ID'
      onClick={handleMapClick} // Add click handler for the map
    >
      {launchedDrones.map((drone, index) => (
        <AdvancedMarker
          clickable={true}
          onClick={handleClick}
          key={index}
          position={{ lat: parseFloat(drone.district.latitude), lng: parseFloat(drone.district.longitude) }}
        >
          <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
      ))}
    </Map>
  </APIProvider>
) : (
  <MapContainer origin={{lat: -1.5977107241293707, lng: 29.51424132530372}} destination={{lat:parseFloat(selectedDrone.district.latitude),lng:parseFloat(selectedDrone.district.longitude)}} />
)}

      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Control Drone</h2>
        <form className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center text-center py-4">
            <label htmlFor="droneId" className="block text-gray-700 font-bold p-2">Drone ID: </label>
            <select
  id="droneId"
  name="droneId"
  value={droneId}
  onChange={(e) => {
    const selectedDroneObject = launchedDrones.find(drone => drone.drone_id === e.target.value);
    setSelectedDrone(selectedDroneObject);
    setDroneId(selectedDroneObject.drone_id);
  }}
  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-[10rem]"
  required
>
  <option value="">Select Drone</option>
  {launchedDrones.map((drone, index) => (
    <option key={index} value={drone.drone_id}>{drone.drone_id}</option>
  ))}
</select>
            <span className='py-2'>or Type</span>
            <input type="text" value={droneId} placeholder='Drone ID' className='border-2 rounded mx-2 border-gray-500' onChange={(e)=>setDroneId(e.target.value)} />
          </div>
          <div className="grid gap-4">
            <div className='grid grid-cols-3 gap-4'>
              <button type="button" onClick={() => sendCommand('S',"Disable Autopilote")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center" title="Start">
                <FaPlay size={32} />
              </button>
              <button type="button" onClick={() => sendCommand('T',"Enable Autopilote")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center" title="Stop">
                <FaStop size={32} />
              </button>
              <button type="button" onClick={() => sendCommand('H',"Stop surveillance  and Return To station")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center" title="Home">
                <FaHome size={32} />
              </button>
            </div>
            <div className='min-h-[30vh] max-h-[40vh] mx-auto aspect-square grid grid-cols-3 grid-rows-3 gap-8'>
              <div></div>
              <button type="button" onClick={() => sendControlCommand('F')} className="bg-blue-500 hover:bg-blue-700 active:scale-110 active:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center" title="Forward">
                <FaArrowUp size={27} />
              </button>
              <div></div>
              <button type="button" onClick={() => sendControlCommand('L')} className="bg-blue-500 hover:bg-blue-700 active:scale-110 active:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center" title="Left">
                <FaArrowLeft size={27} />
              </button>
              <div className='bg-blue-500 aspect-square rounded-full'></div>
              <button type="button" onClick={() => sendControlCommand('R')} className="bg-blue-500 hover:bg-blue-700 active:scale-110 active:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center" title="Right">
                <FaArrowRight size={27} />
              </button>
              <div></div>
              <button type="button" onClick={() => sendControlCommand('B')} className="bg-blue-500 hover:bg-blue-700 active:scale-110 active:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center" title="Backward">
                <FaArrowDown size={27} />
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Message Notifications</h2>
        <div className="bg-white p-4 rounded-lg shadow-md">
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            No
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            From
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Message
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {messages.map((message, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{index+1}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{message.from}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">{message.message}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
      </div>
    </div>
  );
};

export default DroneControlDashboard;
