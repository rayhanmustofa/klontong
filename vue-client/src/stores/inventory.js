import { BASE_URL } from "../base_url";
import { defineStore } from 'pinia'
import axios from 'axios';

export const useInventoryStore = defineStore({
  id: 'inventory',
  state: () => ({
    isLogin: false,
    testo:`testo` ,
    baseUrl : BASE_URL,
    inventories:[]
  }),
  actions: {
    async login(data){
      try {
        let response = await axios({
          method: `POST`,
          url: this.baseUrl+`login`,
          data:data
        })
        let access_token = response.data.data.accessToken
        localStorage.setItem(`access_token`,access_token)
        console.log(response.data.data)
        this.isLogin = true;
        // this.fetchData()
        this.router.push(`/`)
        swal(`You're logged in!`);

        
      } catch (err) {
        console.log(err)
        swal({
          title: "Error " + err.response.data.statusCode,
          text: err.response.data.error.message,
        });
        localStorage.clear()
      }
    },

    async register(data){
      try {
        let response = await axios({
          method: `POST`,
          url: this.baseUrl+`register`,
          data:data
        })
        this.router.push(`/login`)
        swal({
          title: "Sign Up Success!",
          text: `Please login to continue`,
        });

      } catch (err) {
        console.log(err)
        swal({
          title: "Error " + err.response.data.statusCode,
          text: err.response.data.error.message,
        });
        localStorage.clear()
      }
    },


    async addProduct(data){
      try {
        console.log(data)
        let response = await axios({
          method: `POST`,
          url: this.baseUrl+`products`,
          headers: {access_token: localStorage.getItem(`access_token`)},
          data:data
        })
        console.log(response)
        this.fetchData()
        this.router.push(`/`)
        swal(`Success adding product!`);
      } catch (err) {
        console.log(err)
        swal({
          title: "Error " + err.response.data.statusCode,
          text: err.response.data.error.message,
        });
      }
    },

    async fetchData(page, name){
      const params = {};

      if (name !== undefined) {
        params.name = name;
      }
    
      if (page !== undefined) {
        params.page = page;
      }
    
      const queryString = Object.keys(params)
        .map((key) => key + "=" + encodeURIComponent(params[key]))
        .join("&");
    
      let url = this.baseUrl + "products";
      
      if (queryString !== "") {
        url += "?" + queryString;
      }

      try {
        let {data}= await axios({
          method:`get`,
          url: url,
        })
        this.inventories=data
        window.scrollTo({ top: 0, behavior: 'smooth' });

        
      } catch (err) {
        swal({
          title: "Error " + err.response.data.statusCode,
          text: err.response.data.error.message,
        });
        localStorage.clear
      }
    },

    setIsLogin(value) {
      this.isLogin = value
    },

    logout(){
      localStorage.clear()
      this.isLogin=false
      this.router.push('/login')
      swal(`You are logged out`);
    }
  }
})
