export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields:[
    {
      name: "title",
      title: "Title",
      type:"string",
    },
    {
      name: "projectImage",
      title: "ProjectImage",
      type:"image",
      options:{
        hotspot:true
      }
    },
    {
      name: "summary",
      title: "Summary",
      type:"string",
    },
    {
      name: "technologies",
      title: "Technologies",
      type:"array",
      of: [{type:"reference", to:{type:'skill'}}]
    },
    {
      name: "gitUrl",
      title: "GitUrl",
      type:"url",
    },
    {
      name: "liveUrl",
      title: "LiveUrl",
      type:"url",
      
    }
  ]
}