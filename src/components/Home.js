import React from 'react'
import { styled } from 'styled-components';
import Section from "./Section"

const Home = () => {
  return (
    <Container>
        <Section 
        title="Model S"
        description="Order Online For Touchless Delievery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        />
        <Section 
           title="Model Y"
           description="Order Online For Touchless Delievery"
           backgroundImg="model-y.jpg"
           leftBtnText="Custom Order"
           rightBtnText="Existing Inventory"

        />
        <Section 
           title="Model 3"
           description="Order Online For Touchless Delievery"
           backgroundImg="model-3.jpg"
           leftBtnText="Custom Order"
           rightBtnText="Existing Inventory"

        />
        <Section 
        
        title="Model X"
        description="Order Online For Touchless Delievery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        />

      <Section 
        
        title="Lowest Cost Solar Panels In America"
        description="Money Back Guarante"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        />


<Section 
        
        title="Solar For New Roofs"
        description="Solar Roof Costs Less Than A New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        />


<Section 
        
        title="Accessories"
        description="Solar Roof Costs Less Than A New Roof Plus Solar Panels"
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
        
        />
      
      
    </Container>
  )
}

export default Home

const Container = styled.div`
height : 100vh;
z-index:10;
`