const {
  getAllTagsDb,
  getTagByIdDb,
  createTagDb,
  updateTagByID,
  deleteTagByID,
} = require("../db/tag.db");

// Get all tags
const getAllTags = async () => {
  try {
    const tags = await getAllTagsDb();
    return tags;
  } catch (error) {
    throw new Error("Error fetching tags:", error);
  }
};

// Get tag by ID
const getTagById = async (id) => {
  try {
    const tag = await getTagByIdDb(id);
    if (tag.length === 0) {
      throw new Error("Tag not found");
    }
    return tag[0];
  } catch (error) {
    throw new Error("Error fetching tag by ID:", error);
  }
};

// Create a new tag
const createTag = async (tagData) => {
  try {
    const newTag = await createTagDb(tagData);
    return newTag;
  } catch (error) {
    throw new Error("Error creating tag:", error);
  }
};

// Update tag by ID
const updateTag = async (id, tag_name) => {
  try {
    const updatedTag = await updateTagByID({ id, tag_name });
    return updatedTag;
  } catch (error) {
    throw new Error("Error updating tag:", error);
  }
};

// Delete tag by ID
const deleteTag = async (id) => {
  try {
    const deletedTag = await deleteTagByID(id);
    return deletedTag;
  } catch (error) {
    throw new Error("Error deleting tag:", error);
  }
};

module.exports = {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
};
