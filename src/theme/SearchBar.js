/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';

function Search() {
  return (
    <form
      action="https://www.google.com/search"
      method="get"
      name="searchform"
      target="_blank"
    >
      <input name="sitesearch" type="hidden" value="docs.openfn.org" />
      <input
        autocomplete="on"
        class="form-control search"
        className="customSearchInput"
        name="q"
        placeholder="Search docs.openfn.org"
        required="required"
        type="text"
      />
    </form>
  );
}

export default Search;
