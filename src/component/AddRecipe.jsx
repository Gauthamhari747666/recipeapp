import React from 'react'

const AddRecipe = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-xl-12 col-xxl-12 col-lg-12">
                    <div className="row-3">
                        <div className="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Recipe Title</label>
                            <input type="text" className="form-control"placeholder="Enter Title" />
                        </div>
                        <h8>ㅤ</h8>
                        <div className="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="from-label">The Creator</label>
                            <input type="text" className="form-control"placeholder="Enter Creator" />
                        </div>
                        <h8>ㅤ</h8>
                        <div className="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="from-label">Description</label>
                            <input type="text" className="form-control"placeholder="Enter Description" />
                        </div>
                        <h8>ㅤ</h8>
                        <div className="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Upload an image</label>
                            <input type="file" name="" id="" className="form-control" />
                        </div>
                        <h8>ㅤ</h8>
                        <div className="col-12 col-md-12 col-sm-12 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Recipe Type</label>
                           <select name="" id="" className="form-select">
                            <option value="Select type">Select Type</option>
                            <option value="">Veg</option>
                            <option value="">Non Veg</option>
                           </select>
                        </div>
                        <h8>ㅤ</h8>
                        <div className="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Ingredients</label>
                            <input type="text" className="form-control" placeholder="Enter Ingredients"/>
                        </div>
                        <h8>ㅤ</h8>
                        <div className="col-12 col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddRecipe