import axios from 'axios'
import { Outlet } from "react-router-dom"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import classes from './Root.module.css'

const Root = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Root