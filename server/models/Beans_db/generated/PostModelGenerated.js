/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE PostModelGenerated.js PLEASE EDIT ../PostModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_Beans_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * Post
      */
    const postSchema = new mongoose.Schema({
      active: {
        type: "Boolean", 
        required: true
      },
      likes: {
        type: "Number"
      },
      post: {
        type: "String", 
        required: true
      },
      time: {
        type: "Date", 
        required: true
      },
      // RELATIONS
      UesrPost: [{
        type: Schema.ObjectId,
        ref: "User"
      }],
      
      
      // EXTERNAL RELATIONS
      /*
      */
    });

    generatedModel.setModel(db.connection.model("Post", postSchema));

    return postSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * PostModel.findByUesrPost
  *   @description CRUD ACTION findByUesrPost
  *   @param Objectid key Id of model to search for
  *
  */
  async findByUesrPost(key) {
    return await generatedModel.model.find({ 'UesrPost' : key});
  },
  


};

export default generatedModel;