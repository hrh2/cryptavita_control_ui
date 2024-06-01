import { useState, useEffect } from 'react';
import { FaPlay, FaStop, FaHome, FaArrowLeft, FaArrowRight, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import io from 'socket.io-client';
import {APIProvider, Map,Pin,AdvancedMarker} from '@vis.gl/react-google-maps';

import 'leaflet/dist/leaflet.css';
import Swal from 'sweetalert2';
import { GiDeliveryDrone } from "react-icons/gi";
const server = 'http://localhost:5000'

const socket = io(server);
const DroneControlDashboard = () => {
  const position = {lat: -1.6006031230495232, lng: 29.515005049259088}
  const [launchedDrones, setLaunchedDrones] = useState([]);
  const [droneId, setDroneId] = useState('');
  const [messages, setMessages] = useState([]);
  const [selectedDrone, setSelectedDrone] = useState(null);

  useEffect(() => {
  
    socket.on('adminNotification', (data) => {
      if(data.length!=0){
      setLaunchedDrones(data);
      }
    });
    
    socket.on('new_message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('adminNotification');
      // socket.off('error_message');
      // socket.off('message_sent');
    };
  }, []);

  const sendCommand = (command) => {
    if (droneId) {
      Swal.fire({
        title: 'Are you sure?',
        text: `Send command '${command}' to drone ${droneId}?`,
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

const sendControlCommand = (command)=>{
  if(droneId){
    socket.emit('sendCommand', { drone_id: droneId, command: command });
  }
}
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Automatically Launched Drones</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
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
  )) : ""}
</tbody>


          </table>
        </div>
      </div>
      <div className="mb-8 h-[50vh] w-full">
        {/* <h2 className="text-2xl font-semibold mb-4">Real-time Drone Positions</h2> */}
        <APIProvider apiKey={'AIzaSyBvvU6jaJbByhHnsqL2xrCT3FprNdyG6kc'}>
        {/* <Map defaultCenter={position} center={position} zoom={10}>
          {launchedDrones.map((drone, index) => (
            <Marker
              key={index}
              options={{
                position: { lat: parseFloat(drone.district.latitude), lng: parseFloat(drone.district.longitude) },
              }}
            />
          ))}
        </Map> */}
        <Map
            defaultZoom={16}
            defaultCenter={position}
            mapId='DEMO_MAP_ID'>
            {launchedDrones.map((drone,index)=>(
              <AdvancedMarker
              key={index}
              position={ {lat: parseFloat(drone.district.latitude), lng: parseFloat(drone.district.longitude) }}>
            <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
            </AdvancedMarker>
            ))}
        </Map>
        </APIProvider>
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
                setDroneId(e.target.value);
                setSelectedDrone(e.target.value);
                }} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-w-[10rem]" 
                required>
                  <option value="">Select Drone</option>
                    {launchedDrones.map((drone, index) => (
                  <option key={index} value={drone.drone_id}>{drone.drone_id}</option>
                ))}
            </select>
          </div>
          <div className="grid gap-4">
            <div className='grid grid-cols-3 gap-4'>
              <button type="button" onClick={() => sendCommand('S')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center" title="Start">
                <FaPlay size={32} />
              </button>
              <button type="button" onClick={() => sendCommand('T')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center" title="Stop">
                <FaStop size={32} />
              </button>
              <button type="button" onClick={() => sendCommand('H')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center" title="Home">
                <FaHome size={32} />
              </button>
            </div>
            <div className='min-h-[30vh] max-h-[40vh] mx-auto aspect-square grid grid-cols-3 grid-rows-3 gap-8'>
              <div></div>
              <button type="button" onClick={() => sendControlCommand('F')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center" title="Forward">
                <FaArrowUp size={27} />
              </button>
              <div></div>
              <button type="button" onClick={() => sendControlCommand('L')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center" title="Left">
                <FaArrowLeft size={27} />
              </button>
              <div className='bg-blue-500 aspect-square rounded-full'></div>
              <button type="button" onClick={() => sendControlCommand('R')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center" title="Right">
                <FaArrowRight size={27} />
              </button>
              <div></div>
              <button type="button" onClick={() => sendControlCommand('B')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center" title="Backward">
                <FaArrowDown size={27} />
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Message Notifications</h2>
        <div className="bg-white p-4 rounded-lg shadow-md max-h-64 overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="border-b border-gray-200 py-2">
              <p>{message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DroneControlDashboard;
