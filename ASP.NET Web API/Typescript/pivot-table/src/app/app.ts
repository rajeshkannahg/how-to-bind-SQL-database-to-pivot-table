import { PivotView, FieldList } from '@syncfusion/ej2-pivotview';

PivotView.Inject(FieldList);

let pivotTableObj: PivotView = new PivotView({
     dataSourceSettings: {
               url: 'https://localhost:44355/api/pivot',
               expandAll: false,
               enableSorting: true,
               columns: [{ name: 'Product' }],
               values: [{ name: 'Quantity' }, { name: 'Amount', caption: 'Sold Amount' }],
               rows: [{ name: 'Country' }, { name: 'State' }],
               formatSettings: [{ name: 'Amount', format: 'C0' }],
               filters: []
          },
     showFieldList: true,
});
pivotTableObj.appendTo('#PivotTable');