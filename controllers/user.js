const express = require('express');
const router = express.Router();

let users = [
  {id: 1, nama: "Putri Mutiara", email: "putrimutiara@gmail.com"},
  {id: 2, nama: "Tinatoon", email: "tina@gmail.com"},
  {id: 3, nama: "Gabriela", email: "gabriela@gmail.com"}

]

module.exports = {
  index:(req, res) => { 
      if(users.length > 0) {
          res.json({
              status: true,
              data: users,
              method: req.method,
              url: req.url
          })
      }else{
          res.json({
              status: false,
              message:"Data masih kosong"
          })
      }
    },

    store:(req, res) => {
      users.push(req.body)
      res.json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          message:"Data Berhasil ditambahkan"
      })
    },

    update:(req, res) => {
      const id = req.params.id;
      users.filter(user => {
          if(user.id == id){
              user.nama = req.body.nama
              user.email = req.body.email
              return user
          }
      })
      res.json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          message:"Data Berhasil diupdate"
      })
    },
    delete:(req, res) => {
      const id = req.params.id;
      users = users.filter(user => user.id != id)
  
      res.json({
          status: true,
          data: users,
          method: req.method,
          url: req.url,
          message:"Data Berhasil dihapus"
      })
  
    }
}