import React,{useEffect} from 'react';

const Foodmap=({location})=>{
    const {kakao} = window;
    
    useEffect(()=>{
        
        if(location.state===undefined){
            document.location.href = "/"
        }else{
            var container = document.getElementById('map');
            var options = {
                center: new kakao.maps.LatLng(location.state.lat, location.state.lng),
                level: 3
            };
            var map = new kakao.maps.Map(container, options);
            // 마커가 표시될 위치입니다
            var markerPosition  = new kakao.maps.LatLng(location.state.lat, location.state.lng); 
            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition
                });
            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
    
            var iwContent = '<div style="font-align:center;">'+location.state.title+'</br>'+location.state.phone+'</br>'
            +location.state.menu+'</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            var iwPosition = new kakao.maps.LatLng(location.state.lat, location.state.lng); //인포윈도우 표시 위치입니다
            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                position : iwPosition, 
                content : iwContent 
            });
    
            // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
            infowindow.open(map, marker); 
            
        }       
    })     
      
      return (
          
          <div>
              <div id="map" style={{width:"100vw", height:"100vh"}}></div> 
          </div>
      )
  }

export default Foodmap;