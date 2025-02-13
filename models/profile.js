import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  bio: String,
  funFacts: String,
  // reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}], 
  posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
