import { pagination } from './Pagination';
import { sortingСore, SortOrders } from './Sorting';

export default class Table {
  constructor(data, elementId) {
    this.data = data;
    this.rootElement = document.getElementById(elementId);
    this.currentPage = 1;
    this.rowsPerPage = 8;
    this.data = data;
    this.initialData = data.slice();
    this.pageQuantity = Math.ceil(this.data.length / this.rowsPerPage);
    this.sorted = SortOrders.NONE;
    this.createStaticContent();
    this.createDynamicContent();
  }

  createDynamicContent = () => {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    const end = start + this.rowsPerPage;
    const onePageData = this.data.slice(start, end);
    this.createTableRows(onePageData);
    this.createPaginationLinks();
  };

  createStaticContent = () => {
    const form = document.getElementById('searchForm');
    form.addEventListener('submit', this.search);
    const headers = document.getElementById('headers');
    headers.innerHTML = '';

    Object.keys(this.data[0]).forEach(key => {
      const th = document.createElement('th');
      const a = document.createElement('a');
      a.classList.add('sort-by');
      a.innerText = key;
      a.addEventListener('click', () => this.sort(key));
      th.appendChild(a);
      headers.appendChild(th);
    });
  };

  createTableRows = onePageData => {
    const table = document.getElementById('tableData');
    table.innerHTML = '';

    onePageData.forEach(obj => {
      const tr = document.createElement('tr');
      Object.values(obj).forEach(value => {
        const td = document.createElement('td');
        td.appendChild(document.createTextNode(value));
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
  };

  createPaginationLinks = () => {
    const pages = document.getElementById('pagination');
    pages.innerHTML = '';

    const previousLink = document.createElement('a');
    previousLink.addEventListener('click', this.updatePage);
    previousLink.innerText = 'Previous';
    pages.appendChild(previousLink);

    pagination(this.currentPage, this.pageQuantity).forEach(page => {
      if (page !== '...') {
        const href = document.createElement('a');
        href.addEventListener('click', this.updatePage);
        href.innerText = page;
        if (page === this.currentPage) {
          href.classList.add('active');
        }
        pages.appendChild(href);
      } else {
        const href = document.createElement('a');
        href.innerText = page;
        pages.appendChild(href);
      }
    });

    const nextLink = document.createElement('a');
    nextLink.addEventListener('click', this.updatePage);
    nextLink.innerText = 'Next';
    pages.appendChild(nextLink);
  };

  updatePage = pageHref => {
    const pageValue = pageHref.target.innerText;
    if (pageValue === 'Next' && this.currentPage < this.pageQuantity) {
      this.currentPage++;
    } else if (pageValue === 'Previous' && this.currentPage > 1) {
      this.currentPage--;
    } else if (!isNaN(parseInt(pageValue))) {
      this.currentPage = parseInt(pageValue);
    }
    this.createDynamicContent();
  };

  search = event => {
    const filteredData = [];
    let searchValue = document.getElementById('searchInput').value;

    if (searchValue !== '') {
      searchValue = isNaN(searchValue) ? searchValue : parseInt(searchValue);
      this.initialData.forEach(obj => {
        Object.values(obj).forEach(value => {
          if (value === searchValue) {
            filteredData.push(obj);
          }
        });
      });
      this.data = filteredData.slice();
    } else {
      this.data = this.initialData.slice();
      this.sorted = SortOrders.NONE;
    }
    this.createDynamicContent();
    event.preventDefault();
    return false;
  };

  sort = sortedField => {
    this.sorted =
      this.sorted === SortOrders.ASCENDING
        ? SortOrders.DESCENDING
        : SortOrders.ASCENDING;

    sortingСore(this.data, (a, b) => {
      let c1 = a[sortedField];
      let c2 = b[sortedField];
      if (typeof c1 === 'string')
        if (c1.indexOf('$') >= 0 && c2.indexOf('$') >= 0) {
          c1 = parseFloat(c1.slice(1));
          c2 = parseFloat(c2.slice(1));
        }
      c1 = isNaN(c1) ? c1.toLowerCase() : c1;
      c2 = isNaN(c2) ? c2.toLowerCase() : c2;

      if (c1 > c2) {
        return this.sorted === SortOrders.ASCENDING ? 1 : -1;
      } else if (c1 < c2) {
        return this.sorted === SortOrders.ASCENDING ? -1 : 1;
      } else {
        return 0;
      }
    });

    this.currentPage = 1;
    this.createDynamicContent();
  };
}
