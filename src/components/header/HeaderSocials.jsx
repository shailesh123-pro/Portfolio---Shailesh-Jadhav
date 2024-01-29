import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {SiCodechef, SiGeeksforgeeks, SiHackerrank, SiLeetcode} from 'react-icons/si'
import{SiCodeforces} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/shailesh-jadhav-798045268/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/shailesh123-pro?tab=repositories" target="_blank"><FaGithubSquare/></a>
        <a href="https://leetcode.com/shailesh_jadhav_111/"><SiLeetcode/></a>
        <a href="https://www.hackerrank.com/profile/shaileshjadhav21" target="_blank"><SiHackerrank/></a>
        <a href="https://auth.geeksforgeeks.org/user/dynamocode111" target="_blank"><SiGeeksforgeeks/></a>
    </div>
  )
}

export default HeaderSocials