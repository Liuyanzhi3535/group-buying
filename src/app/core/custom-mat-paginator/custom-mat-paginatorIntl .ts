import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl {
  itemsPerPageLabel = '每頁筆數';
  nextPageLabel = '下一頁';
  previousPageLabel = '上一頁';
  firstPageLabel = '最前頁';
  lastPageLabel = '最後頁';

  getRangeLabel = function(page, pageSize, length) {
    if (length === 0 || pageSize === 0) {
      // return '0 od ' + length;
      return `第 0 筆、共 ${length} 筆`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    // return startIndex + 1 + ' - ' + endIndex + ' / ' + length;
    return `第 ${startIndex + 1} - ${endIndex} 筆、共 ${length} 筆`;
  };
}
