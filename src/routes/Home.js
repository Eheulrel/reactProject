import React from "react";
import axios from 'axios';
import Food from '../component/Food';
import './Home.css';
import Pagination from "react-js-pagination";

class Home extends React.Component{

    state={
        isLoading: true,
        foods:[],        
        pageSize: 1,
        indexStart:0,
        indexEnd:10,
    }    

    getFoods=async()=>{
        var url = '/6260000/FoodService/getFoodKr'; /*URL*/
        const mykey = 'H4ayjjs5HCCNhWXLoLNACnwifMePg39uNgC15KWObTFL6QqYqxEUbK%2BWWZN7duaSDStbb%2Fn2Og5qp%2BW%2F1nIUcw%3D%3D';
        var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + mykey; /*Service Key*/
        queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
        queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('150'); /**/
        queryParams += '&' + encodeURIComponent('resultType') + '=' + encodeURIComponent('json'); /**/
//        queryParams += '&' + encodeURIComponent('UC_SEQ') + '=' + encodeURIComponent(''); /**/

        const resultData = await axios.get(url+queryParams);
        console.log(resultData);
        this.setState({
            foods:resultData.data.getFoodKr.item, isLoading:false
        });
        // console.log(resultData);
    }    

    componentDidMount(){
        this.getFoods();
    }

    //페이징 관리
    handlePageChange = (pageNumber) => {
        // console.log(`page num is ${pageNumber}`);
        // console.log(`page size is ${this.state.pageSize}`);

        this.setState({
            pageSize: pageNumber,         
            indexStart: (pageNumber-1)*10,
            indexEnd: pageNumber*10
        })      
        
    }

    render(){
        const foods = this.state.foods;
        const{length:count} = this.state.foods;
        // console.log(this.state.foods.slice(this.state.pageSize,this.state.pageSize+10));   
        // console.log(this.state.pageSize,this.state.indexStart,this.state.indexEnd);
        
        return (
            <div className="container">
                {this.state.isLoading?'페이지를 불러오는 중입니다.':(
                    <div className="movies">
                        {/*페이지 슬라이스*/}
                        {foods.sort((a,b)=>{ 
                            if (a.MAIN_TITLE > b.MAIN_TITLE) {  return 1;  }
                            if (a.MAIN_TITLE < b.MAIN_TITLE) {  return -1; }
                            // a must be equal to b
                            return 0;}).slice(this.state.indexStart,this.state.indexEnd).map((item,index)=>{
                            return <Food 
                                key={index}
                                id={item.UC_SEQ}
                                title={item.MAIN_TITLE}
                                phone={item.CNTCT_TEL}
                                content={item.ITEMCNTNTS}
                                medium_cover_image={item.MAIN_IMG_NORMAL}
                                city={item.ADDR1}    
                                lat={item.LAT}
                                lng={item.LNG}    
                                menu={item.RPRSNTV_MENU}        
                                gugun={item.GUGUN_NM}   
                                time={item.USAGE_DAY_WEEK_AND_TIME}             
                            />
                        })}
                        {/*페이징적용*/}
                        <Pagination
                            activePage={this.state.pageSize} 
                            itemsCountPerPage={10}
                            totalItemsCount={count} 
                            pageRangeDisplayed={5} 
                            prevPageText={"‹"} 
                            nextPageText={"›"}      
                            onChange={this.handlePageChange}                                                              
                        />
                        
                    </div>                    
                )}                
            </div>
        );
    }
}

export default Home;