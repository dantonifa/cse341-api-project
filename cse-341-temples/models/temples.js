module.exports = (mongoose) => {
  const Temple = mongoose.model(
    "temples",
    mongoose.Schema(
      {
        temple_id: Number,
        name: String,
        location: String,
        dedicated: String,
        additionalInfo: Boolean,
      },
      { timestamps: true },
    ),
    "temples", // <-- This third parameter forces Mongoose to target the 'temples' collection directly
  );

  return Temple;
};
