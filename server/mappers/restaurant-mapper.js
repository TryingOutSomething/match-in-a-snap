const toRestaurantDto = (restaurantInfo) => {
  return {
    'name': restaurantInfo.name,
    'address': restaurantInfo.address,
    'businessHours': restaurantInfo.business_hours_description,
    'phone': restaurantInfo.phone,
    'deliveryOptions': restaurantInfo.delivery_options,
    'website': restaurantInfo.website,
    'imageUrl': restaurantInfo.image_url,
  };
};

const restaurantMapper = (restaurants) => {
  return restaurants.map(restaurant => toRestaurantDto(restaurant));
};

module.exports = {
  restaurantMapper
};