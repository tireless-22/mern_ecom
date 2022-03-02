
import React from 'react'
import styled from "styled-components"



const Container = styled.div`
width: 100vw;
height: 100vh;
display:flex;




`;

const Image=styled.image`
	
`

const Title=styled.h1`
	
`

const Info=styled.div`
	
`

const Button=styled.button`
	


`


const CategoryItem = (item) => {
	console.log(item);
	return (
		<Container>
			<Image src={item.img} />
			<Info>
				<Title>
					{item.title}

				</Title>
				<Button>

				</Button>
			</Info>

			
			</Container>
				
		)
}

export default CategoryItem