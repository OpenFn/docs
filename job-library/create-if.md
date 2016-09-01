```js
function(state) {
    if(dataValue("salesq9")(state) !== undefined
            && dataValue("salesq9")(state) !== null
            && dataValue("salesq9")(state) !== 0
    ) {
        create("Line_Item__c",
            fields(
                relationship("RecordType", "name", "Sale Item"),
                relationship("Outlet_Call__r", "Invoice_Number__c", dataValue("invoice_number")(state)),
                relationship("Product_Price__r", "Product_Price_ID__c", function(state) {
                    return (
                        dataValue("wat")(state).concat(
                        "_", dataValue("a_u9")(state), "_", dataValue("prj_code9")(state), "_", dataValue("channel")(state)
                        )
                    );
                }),
                field("Sales_Quantity__c", dataValue("salesq9")(state)),
                field("Unit__c", dataValue("a_u9")(state)),
                field("Project_Code__c", dataValue("prj_code9")(state)),
                field("Channel__c", dataValue("channel")(state)),
                field("Unit_Price_c__c", dataValue("unitp9")(state)),
                field("Type__c", "Sale"),
                relationship("Product__r", "Name", dataValue("wat")(state))
            ),
            state
        );
    }
}
```
replaced with:
```js
```js
createIf(
    (dataValue("salesq9")(state) !== undefined
    && dataValue("salesq9")(state) !== null
    && dataValue("salesq9")(state) !== 0),
    "Line_Item__c",
        fields(
            relationship("RecordType", "name", "Sale Item"),
            relationship("Outlet_Call__r", "Invoice_Number__c", dataValue("invoice_number")),
            relationship("Product_Price__r", "Product_Price_ID__c", concatenate(
                dataValue("wat"),
                "_",
                dataValue("a_u9"),
                "_",
                dataValue("prj_code9"),
                "_", dataValue("channel")
                    )
                );
            }),
            field("Sales_Quantity__c", dataValue("salesq9")(state)),
            field("Unit__c", dataValue("a_u9")(state)),
            field("Project_Code__c", dataValue("prj_code9")(state)),
            field("Channel__c", dataValue("channel")(state)),
            field("Unit_Price_c__c", dataValue("unitp9")(state)),
            field("Type__c", "Sale"),
            relationship("Product__r", "Name", dataValue("wat")(state))
        ),
        state
    );
}
}
```
