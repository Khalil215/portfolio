export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields:[
    {
      name: "title",
      title: "Title",
      type:"string",
    },
    {
      name: "skillImage",
      title: "SkillImage",
      type:"image",
      options:{
        hotspot:true
      }
    },
  ]
}