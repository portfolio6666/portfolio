import React from 'react'
import { Container, Content } from './style'
import {FaFacebook, FaInstagram } from 'react-icons/fa'
import ItemContact from '../../../components/Header/ItemContact'


export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact 
          IconFa={FaFacebook} 
          LinkContact="https://www.facebook.com/felipe.landim.796" 
        />
        <ItemContact 
          IconFa={FaInstagram} 
          LinkContact="https://www.instagram.com/f.landim09" 
        />
       

      </Content>
    </Container>
  )
}
