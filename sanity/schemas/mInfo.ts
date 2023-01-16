export default {
  name: 'mInfo',
  title: 'MInfo',
  type: 'document',
  fields:[
    {
      name: "name",
      title: "Name",
      type:"string",
    },
    {
      name: "homeImage",
      title: "HomeImage",
      type:"image",
      options:{
        hotspot:true
      }
    },
    {
      name: "role",
      title: "Role",
      type:"string",
    },
    {
      name: "aboutImage",
      title: "AboutImage",
      type:"image",
      options:{
        hotspot:true
      }
    },
    {
      name: "about",
      title: "About",
      type:"string",
    },
    {
      name: "socials",
      title: "Socials",
      type:"array",
      of: [{type:"reference", to:{type:'social'}}]
    }
  ]
}