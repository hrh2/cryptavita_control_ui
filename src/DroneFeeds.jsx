import MapContainer from "./DroneLocation"
export default function DroneFeeds() {
    const origin = {lat: -1.5977107241293707, lng: 29.51424132530372}; // New York City
    const destination = {lat: -1.5977107241293707, lng: 29.71424132530372}; // Los Angeles
  return (
    <div>
<div className="bg-white w-full h-full h-min-screen p-8">
    <div className="container m-auto">
        <div className="w-full z-0 relative md:min-h-[41rem]">
            <div className="w-full h-full relative z-0 rounded-2xl">
                <video className="relative z-[1] inline w-full h-full object-center object-cover rounded-2xl" preload="metadata" data-src="https://player.vimeo.com/progressive_redirect/playback/840627949/rendition/1080p/file.mp4?loc=external&amp;signature=df9cfec6465233ea6f14bd85906ac7412e35a0a00e65cdb6823b45d2b2cf5607" loop="" playsInline="" autoPlay="" aria-hidden="false" src="https://player.vimeo.com/progressive_redirect/playback/840627949/rendition/1080p/file.mp4?loc=external&amp;signature=df9cfec6465233ea6f14bd85906ac7412e35a0a00e65cdb6823b45d2b2cf5607"></video>
                <video className="absolute top-0 left-0 w-full h-full transform-gpu translate-x-0 translate-y-0 z-0 inline object-center object-cover rounded-2xl blur-2xl" preload="none" aria-hidden="false" data-src="https://player.vimeo.com/progressive_redirect/playback/840627949/rendition/1080p/file.mp4?loc=external&amp;signature=df9cfec6465233ea6f14bd85906ac7412e35a0a00e65cdb6823b45d2b2cf5607" loop="" playsInline="" autoPlay="" src="https://player.vimeo.com/progressive_redirect/playback/840627949/rendition/1080p/file.mp4?loc=external&amp;signature=df9cfec6465233ea6f14bd85906ac7412e35a0a00e65cdb6823b45d2b2cf5607"></video>
            </div>
        </div>
    </div>
</div>
    <div className="h-[50vh] w-[95vw] mx-auto">
        <MapContainer origin={origin} destination={destination} />    </div>
    </div>
  )
}
