import axios from 'axios'

export const fetchPosts =  () => async (dispatch) => 
{
   const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
   dispatch({type:'FETCH_POSTS', payload:response});
}

