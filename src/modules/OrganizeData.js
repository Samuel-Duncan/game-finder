class OrganizeData {
  static organizeData(data) {
    const {
      background_image: image,
      description_raw: description,
      developers,
      dominant_color: colorPrimary,
      saturated_color: colorSecondary,
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
      colorPrimary,
      colorSecondary,
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
