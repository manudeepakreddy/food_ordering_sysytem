import classes from './Model.module.css';
import ReactDom from 'react-dom';
import {Fragment} from 'react';
const BackDrop = (props) =>
{
    return <div onClick = {props.onClick} className = {classes.backdrop}/>
};
const ModelOverlay = (props) =>
{
    return <div className = {classes.modal}>
        <div className = {classes.content}> 
            {props.children} 
        </div>
        </div>
}
const Model = (props) =>
{
    const portalid = document.getElementById('bkdrp');
    return(
        <Fragment>
            {ReactDom.createPortal(<BackDrop onClick = {props.byClick} /> , portalid)}
            {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay> , portalid)}
        </Fragment>
    );
}
export default Model;