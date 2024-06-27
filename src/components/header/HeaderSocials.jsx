import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {SiCodechef, SiGeeksforgeeks, SiHackerrank, SiLeetcode} from 'react-icons/si'
import{SiCodeforces} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/shailesh-jadhav-798045268/" rel="noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/shailesh123-pro?tab=repositories" rel="noreferrer" target="_blank"><FaGithubSquare/></a>
        <a href="https://leetcode.com/shailesh_jadhav_111/" rel="noreferrer" target="_blank"><SiLeetcode/></a>
        <a href="https://www.hackerrank.com/profile/shaileshjadhav21" rel="noreferrer" target="_blank"><SiHackerrank/></a>
        <a href="https://auth.geeksforgeeks.org/user/dynamocode111" rel="noreferrer" target="_blank"><SiGeeksforgeeks/></a>
    </div>
  )
}

export default HeaderSocials