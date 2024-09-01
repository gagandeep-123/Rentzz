import User from "../model/user.js";

export const signupUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = userData && new User(userData);
    await newUser.save();
    res.status(200).json({ message: "User is succesfully signed up", status:200 });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const userData = req.body;
    const checkUserExists = await User.findOne({ userId: userData.userId });
    console.log("userExits", checkUserExists);
    if (checkUserExists) {
      res.status(200).json({message: "User is successfully logged in", status: 200})
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};
