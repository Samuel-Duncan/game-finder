class OrganizeData {
  static organizeData(data) {
    const {
      background_image: image,
      description_raw: description,
      developers,
      esrb_rating: { name: rating },
      name,
      reddit_url: reddit,
      released,
      tags,
      website,
    } = data;
    return {
      image,
      description,
      developers,
      rating,
      name,
      reddit,
      released,
      tags,
      website,
    };
  }
}

export default OrganizeData;
