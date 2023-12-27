import { Link } from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import { Button } from "@mui/base";

const HomeButton = ({ }) => {

  return (
    <>
      <Link to={'/'} >
        <Button className="header-button buttons-border">
          <HomeIcon />
        </Button>
      </Link>
    </>
  )
}

export default HomeButton