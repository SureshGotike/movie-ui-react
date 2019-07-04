import axios from 'axios';

// Not using the react component class here, bcz, we dont want to render anything, but want to export something. So export the instance of axios directly without a classaaa
export default axios.create({
                     baseURL:'https://movieservice.cfapps.io/movies/'
                 });
