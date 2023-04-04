import React from 'react'
import './Pagination.css'

export const Pagination = ({postperpage,totalpage,setCurrentpage,currentpage}) => {
const pagesnumber= []
console.log(currentpage)
 for(let i=1;i<= Math.ceil(totalpage/postperpage);i++){

    pagesnumber.push(i)

 }


  return (
    <>
    <div className='pages-btn'>
        {
            pagesnumber.map((ele)=>{
                return(
                    <>
                    
                    <button className={ele === currentpage?'active':''} onClick={()=>{
                        setCurrentpage(ele)
                    }}>{ele}</button>
                    </>
                )
            })
        }

        {/* <button className='pagenumber-btn'>1</button>
        <button className='pagenumber-btn'>1</button> */}

    </div>
    </>
  )
}
