export const getInventory = async (req,res) =>{
    try {
        const allInventory = await inventory.find();
        
        res.status(200).json({allInventory});

    } catch (error) {
        res.status(404).json(message, error.message)
    }
}
export const createInventory = async (req,res) =>{
    const inventory = req.body;
    const newInventory = new inventory(inventory);
    try {
        await newStudent.save();
        res.status(201).json(newInventory);
    } catch (error) {
        res.status(409).json(message, error.message)
    }
}