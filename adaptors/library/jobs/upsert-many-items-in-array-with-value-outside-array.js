// When array items need a value from outside the array (e.g., a parent form field),
// use fn() + array.map() to merge the value into each item before iterating.
fn(state => ({
  ...state,
  cards: state.data.form.ID_cards_given_to_vendor.map(card => ({
    sp_id: card,
    vendor_badge_code: state.data.form.ID_vendor,
    distribution_date: state.data.form.meta.timeEnd,
  })),
}));

each(
  $.cards,
  upsert('Small_Packet__c', 'sp_id__c', {
    sp_id__c: $.data.sp_id,
    Vendor__r: { Badge_Code__c: $.data.vendor_badge_code },
    Small_Packet_Distribution_Date__c: $.data.distribution_date,
  })
);
