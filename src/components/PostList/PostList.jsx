import { Box, Tab } from "@mui/material"
import { TabContext, TabPanel, TabList } from "@mui/lab"
import React from "react"
import axios from "axios"
import spinner from "./spinner.svg"
import { useState, useEffect } from "react"
import styles from "../PostList/post.module.css"
import "./spinner.css"

export const PostList = () => {
  const [value, setValue] = useState('1')
  const [postList, setPostList] = useState(null);
  const [loading, setLoading] = useState(false)

  const fetchPost = async () => {
    try {
      const data = await axios
        .get('https://studapi.teachmeskills.by/blog/posts/?limit=20&offset=20')
        .then(res => { setPostList(res.data.results) })
      setLoading(true)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchPost();
  }, [])


  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      {loading ?
        <Box>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList aria-label='Tabs example'
                onChange={handleChange}
                textColor='secondary'
                indicatorColor='secondary'
              >
                <Tab label='All' value='1' />
                <Tab label='My favorites' value='2' />
              </TabList>
            </Box>
            <TabPanel className={styles.grid} value='1'>
              {postList.map((item) => {
                return (
                  <div className={styles.header} key={item.id} >
                    <div className={styles.headerItem} >
                      <img className={styles.headerImg} src={item.image} alt="card" />
                      <p className={styles.headerDate}>{item.date}</p>
                      <p className={styles.headerName}>{item.title}</p>
                      <p className={styles.headerText}>{item.text.substring(0, 287)}</p>
                      <div className={styles.line}></div>
                    </div>
                  </div>

                )
              })
              }
            </TabPanel>
            <TabPanel value='2'>
              <img style={{display: 'flex', margin: 'auto'}} alt="cat" src="https://i.ibb.co/ZMv2wjT/cat-lying-pillow-cartoon-character-1308-112475-removebg-preview.png" />
            </TabPanel>
          </TabContext>
        </Box>
        :
        <div className="spinner">
          <img className="spinner-img" alt="spin" src={spinner} />
        </div>
      }
    </>
  )
}
