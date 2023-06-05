function add_remark(data) {
	let d = new frappe.ui.Dialog({
		title: 'Enter Remark',
		fields: [
			{
				label: 'Remark',
				fieldname: 'remark',
				fieldtype: 'Data',
				reqd:1
			}],
		primary_action_label: 'Submit',
		primary_action(values) {
			frappe.call({
				method:"add_remark",
				args:{
					remark: values.remark,
					doc: data
				},
				callback: function(r){
					frappe.msgprint("Remark Added!");
				}
			});
			d.hide();
		}
});
 d.show();
}