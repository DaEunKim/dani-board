import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class BoardItem extends Component {
    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row.brdno);
    }    
    
    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }    
    
    render() {
        const link_tmp = this.props.row;
        return(
            <tr key={link_tmp.brdno}>
                <td><Link to={'/user/' + link_tmp.brdno}>{link_tmp.brdno} </Link></td>
                <td><Link to={'/user/' + link_tmp.brdno}><div onClick={this.handleSelectRow}> {link_tmp.brdtitle}</div></Link></td>
                <td><Link to={'/user/' + link_tmp.brdno}>{link_tmp.brdwriter} </Link></td>
                <td><Link to={'/user/' + link_tmp.brdno}> {link_tmp.brddate.toLocaleDateString('ko-KR')}</Link></td>
                <td><button onClick={this.handleRemove}> X </button></td>
            </tr>
        );
    }
}

export default BoardItem;

