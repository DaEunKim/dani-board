import React, { Component } from 'react';
import BoardForm from './BoardForm';
import BoardItem from './BoardItem';
import { Route, BrowserRouter as Router , Link } from 'react-router-dom';
import './App.css';

class DaniBoard extends Component {
    state = {
        maxNo: 6,
        boards: [
            {
                brdno: 1,
                brdwriter: 'dani',
                brdtitle: 'React Programming',
                brddate: new Date()
            },
            {
                brdno: 2,
                brdwriter: 'Kim Da Eun',
                brdtitle: 'Web Programming',
                brddate: new Date()
            },
            {
                brdno: 3,
                brdwriter: '김다은',
                brdtitle: '유니타스',
                brddate: new Date()
            },
            {
                brdno: 4,
                brdwriter: '다은',
                brdtitle: 'ST',
                brddate: new Date()
            },
            {
                brdno: 5,
                brdwriter: 'rlaekdms',
                brdtitle: 'good',
                brddate: new Date()
            }
        ],
         selectedBoard:{}
    }
    
    handleSaveData = (data) => {
        
        if (!data.brdno) { 
            this.setState({
                maxNo: this.state.maxNo+1,
                boards: this.state.boards.concat(
                    {brdno: this.state.maxNo, brddate: new Date(), ...data }
                    ),
                selectedBoard: {}
            });
        } else {
            this.setState({
                boards: this.state.boards.map(row => data.brdno === row.brdno ? {...data }: row),
                selectedBoard: {}
            })            
        }
    }
    
    handleRemove = (brdno) => {
        this.setState({
            maxNo : this.state.maxNo-1,
            boards: this.state.boards.filter(row => row.brdno !== brdno)
            // , selectedBoard: {}
        })
    }
    
    handleSelectRow = (row) => {
        this.setState({
            selectedBoard:row
        });
    }
    
    render() {
        const { boards, selectedBoard } = this.state;
        const list = boards.map(row => (
            
            <BoardItem key={row.brdno} 
                row={row} 
                onRemove={this.handleRemove} 
                onSelectRow={this.handleSelectRow} /> 
                
        
        ));


        return (
            <Router>
            <div className="cusAppCss">
            <h2>Dani Board</h2>            
                <BoardForm selectedBoard={selectedBoard} onSaveData={this.handleSaveData}/>
                <table border="3px">
                    <tbody align="center">
                    <tr>
                        <td className="Index" width="50">Index</td>
                        <td width="300">Title</td>
                        <td width="200">Name</td>
                        <td width="300">Date</td>
                    </tr>
                    {list}
                    </tbody>
                </table>
                <Route path="/user/:id" component={()=><UserCard ListState={this.state}/>} />
                
            </div>
            

            </Router>
        );
    }
}

class UserCard extends Component {
    render () {
    const {ListState} = this.props;
    const boardVal = ListState.boards;
    const id = ListState.selectedBoard.brdno;

    // console.log(boardVal[4].brdtitle);
    
    if(id==null || id-1==null){
        return (
            <div align="center">
            <div >내용이 부족합니다. </div>
          <button><Link to='/'>뒤로가기</Link></button>
        </div>
        )
    }
    else{
        return (
            <div align="center">
                <div >{id}. {boardVal[id-1].brdtitle} - {boardVal[id-1].brdwriter} </div>
              <button><Link to='/'>뒤로가기</Link></button>
            </div>
          )
        }
    
    }
  }

export default DaniBoard;

