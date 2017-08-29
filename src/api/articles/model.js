import mongoose, { Schema } from 'mongoose'

const articlesSchema = new Schema(
  {
    type: {
      type: String
    },
    garment: {
      type: String
    },
    brand: {
      type: String
    },
    supplier: {
      type: String
    },
    name: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

articlesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      type: this.type,
      garment: this.garment,
      brand: this.brand,
      supplier: this.supplier,
      name: this.name,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full
      ? {
        ...view
          // add properties for a full view
      }
      : view
  }
}

const model = mongoose.model('Articles', articlesSchema)

export const schema = model.schema
export default model
