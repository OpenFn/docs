// Pre-process: normalize data to an array and merge in parent-level fields.
// Use fn() + array.map() instead of merge() + dataPath() to enrich child items.
fn(state => {
  const { ID_cards_given_to_vendor, ID_vendor } = state.data.form;
  const cards = Array.isArray(ID_cards_given_to_vendor)
    ? ID_cards_given_to_vendor
    : [ID_cards_given_to_vendor];

  return {
    ...state,
    processedCards: cards.map(card => ({
      sp_id: card,
      vendor_badge_code: ID_vendor,
      distribution_date: state.data.form.meta.timeEnd,
    })),
  };
});

each(
  $.processedCards,
  upsert('Small_Packet__c', 'sp_id__c', {
    sp_id__c: $.data.sp_id,
    Vendor__r: { Badge_Code__c: $.data.vendor_badge_code },
    Small_Packet_Distribution_Date__c: $.data.distribution_date,
  })
);
