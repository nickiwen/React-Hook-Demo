import React,{ useContext } from 'react'
import {MyContext} from './MainPage'

function ChildPage(){
	return (
	    <p>{useContext(MyContext)}</p>
	)
}
export default ChildPage;