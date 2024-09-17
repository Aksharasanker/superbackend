
const complaints = require('../modal/grvSchema')
exports.addgrv = async (req, res) => {



  console.log(req.payload)
  const userid = req.payload
  const { type, phone, greviance } = req.body
  if (!type || !phone || !greviance) {
    return res.status(400).json({ message: "All fields are required." });
  }
  console.log(type, phone, greviance)

  try {
    const newcomplaints = new complaints({
      type,
      phone,
      greviance,
      userId: userid

    })

    await newcomplaints.save()
    res.status(200).json(newcomplaints)
  } catch (error) {
    res.status(500).json(error);
    console.log(error)
  }
}

exports.getAllgrv = async (req, res) => {
  try {
    const allGrv = await complaints.find()
    res.status(200).json(allGrv)
  } catch (error) {
    res.status(401).json(`request declined due to ${error}`)
  }
}

exports.getUserGrv = async (req, res) => {

  const userId = req.payload
  console.log(userId)
  try {
    const allGrv = await complaints.find({ userId })
    console.log(allGrv)
    res.status(200).json(allGrv)
  } catch (error) {
    res.status(401).json(`request failed due to ${error}`)
  }
}

