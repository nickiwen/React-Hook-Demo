import React from 'react'
import ChildPage from './ChildPage'

// 参考：https://blog.csdn.net/weixin_43676119/article/details/89150233

export const MyContext = React.createContext();
function MainPage(){
	return (
	    <div>
	    	<MyContext.Provider value ='Hello React Hook useContext'>
	    	     <ChildPage />
	    	</MyContext.Provider>
	    </div>
	)
}
export default MainPage;