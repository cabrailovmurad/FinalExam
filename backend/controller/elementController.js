import { Example } from "../models/elementModel.js"

export const getAllData = async (req, res) => {
    try {
        const element = await Example.find()
        res.send(element)
    } catch (error) {
        res.send(error.message)
    }
}
export const getDataById = async (req, res) => {
    try {
        const { id } = req.params
        const element = await Example.findById(id)
        res.send(element);
    } catch (error) {
        res.send(error.message)

    }

}

export const createData = async (req, res) => {
    try {
        const { image, title, price, description} = req.body
        const newElement = new Example({ image, title, price, description})
        await newElement.save()
        res.send(newElement);

    } catch (error) {
        res.send(error.message)

    }
}

export const deleteData =  async (req, res) => {
    try {
        const { id } = req.params
        const element = await Example.findByIdAndDelete(id)
        res.send("element is deleted");
    } catch (error) {
        res.send(error.message)

    }

}