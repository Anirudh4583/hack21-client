import React, { useState } from 'react'
import { Box, CircularProgress, Modal } from '@mui/material'
import axios from 'axios'

const Dashboard = () => {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState({})
  const [loading, setLoading] = useState(false)

  function handleChange(event, type = null) {
    if (type === 'image') {
      setState({
        ...state,
        image: event.target.files[0],
      })
    } else if (type === 'check') {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      })
    } else
      setState((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }))
  }

  console.log(state)

  async function handleSubmit(e) {
    e.preventDefault()
    const image = state.image
    console.log(image)

    var myHeaders = new Headers()
    myHeaders.append(
      'Authorization',
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEIyMkREQzE2OGJGNjFhMzMzRkIxNjE2RTQ2NjRkMDk1OTY5OTE3NzciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzOTMwNDQ3OTYwMywibmFtZSI6ImdldEh1YiJ9.BbEvD-QxC9IqmFJx-Ve9Pt9VpyVLFotfQtR2n7yn0lQ'
    )

    var formdata = new FormData()
    formdata.append('test.jpg', image, image)

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    }

    fetch('https://api.nft.storage/upload', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))

    // axios
    //   .post(
    //     'https://api.nft.storage/upload',
    //     { image },
    //     {
    //       headers: {
    //         'Content-Type': 'aplication/json',
    //         Authorization:
    //           'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEIyMkREQzE2OGJGNjFhMzMzRkIxNjE2RTQ2NjRkMDk1OTY5OTE3NzciLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzOTMwNDQ3OTYwMywibmFtZSI6ImdldEh1YiJ9.BbEvD-QxC9IqmFJx-Ve9Pt9VpyVLFotfQtR2n7yn0lQ',
    //       },
    //     }
    //   )
    //   .then((res) => console.log('res', res))
    //   .catch((err) => console.error(err))
  }

  return (
    <>
      <div className="flex flex-col w-full md:w-1/2 ">
        <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
          <button
            className="p-4 text-xl font-bold text-white bg-black"
            onClick={() => setOpen(true)}
          >
            Add New
          </button>
        </div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          {loading ? (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          ) : (
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="relative min-h-screen flex items-center justify-center bg-center py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover relative items-center">
                <div className="absolute opacity-60 inset-0 z-0"></div>
                <form
                  className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10"
                  onReset={() => setOpen(false)}
                >
                  <div className="grid  gap-8 grid-cols-1">
                    <div className="flex flex-col ">
                      <div className="flex flex-col sm:flex-row items-center">
                        <h2 className="font-semibold text-lg mr-auto">
                          Add New Code Snippet
                        </h2>
                        <div className="w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0"></div>
                      </div>
                      <div className="mt-5">
                        <div className="form">
                          <div className="md:space-y-2 mb-3">
                            <label className="text-xs font-semibold text-gray-600 py-2">
                              Add File
                              <abbr className="hidden" title="required">
                                *
                              </abbr>
                            </label>
                            <div className="flex items-center py-6">
                              {/* {state.image && (
                                <div className="w-12 h-12 mr-4 flex-none rounded-xl border overflow-hidden">
                                  <img
                                    className="w-12 h-12 mr-4 object-cover"
                                    src={URL.createObjectURL(state.image)}
                                    alt="Upload"
                                  />
                                </div>
                              )} */}
                              <label className="cursor-pointer ">
                                <span className="focus:outline-none text-white text-sm py-2 px-4 rounded-full bg-green-400 hover:bg-green-500 hover:shadow-lg">
                                  Browse
                                </span>
                                <input
                                  type="file"
                                  className="hidden"
                                  onChange={(e) => handleChange(e, 'image')}
                                />
                              </label>
                            </div>
                          </div>
                          <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                            <div className="mb-3 space-y-2 w-full text-xs">
                              <label className="font-semibold text-gray-600 py-2">
                                Title <abbr title="required">*</abbr>
                              </label>
                              <input
                                placeholder="Title"
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                                required="required"
                                type="text"
                                name="title"
                                id="integration_shop_name"
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                            <div className="mb-3 space-y-2 w-full text-xs">
                              <label className="font-semibold text-gray-600 py-2">
                                Cost <abbr title="required">*</abbr>
                              </label>
                              <input
                                placeholder="Cost"
                                className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                                required="required"
                                type="text"
                                name="cost"
                                id="integration_shop_name"
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                          </div>
                          <div className="mb-3 space-y-2 w-full text-xs">
                            <label className=" font-semibold text-gray-600 py-2">
                              Public Address <abbr title="required">*</abbr>
                            </label>
                            <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                              <div className="flex">
                                <span className="flex items-center leading-normal bg-grey-lighter border-1 rounded-r-none border border-r-0 border-blue-300 px-3 whitespace-no-wrap text-grey-dark text-sm w-12 h-10 bg-blue-300 justify-center items-center  text-xl rounded-lg text-white">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    ></path>
                                  </svg>
                                </span>
                              </div>
                              <input
                                type="text"
                                className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border border-l-0 h-10 border-grey-light rounded-lg rounded-l-none px-3 relative focus:border-blue focus:shadow"
                                placeholder="0xD ..."
                                name="public_address"
                                onChange={(e) => handleChange(e)}
                              />
                            </div>
                          </div>
                          <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                            <div className="w-full flex flex-col mb-3">
                              <label className="font-semibold text-gray-600 py-2">
                                Tradable?
                              </label>
                              <input
                                className="checked:bg-blue-500 outline-none focus:outline-none duration-200 ease-in appearance-none block w-6 h-6 rounded-full bg-white border-4 cursor-pointer"
                                type="checkbox"
                                name="tradable"
                                id="integration_street_address"
                                onChange={(e) => handleChange(e, 'check')}
                              />
                            </div>
                          </div>
                          <div className="flex-auto w-full mb-1 text-xs space-y-2">
                            <label className="font-semibold text-gray-600 py-2">
                              Description*
                            </label>
                            <textarea
                              required
                              name="description"
                              id=""
                              className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
                              placeholder="Enter Item Info"
                              spellCheck="false"
                              onChange={(e) => handleChange(e)}
                            ></textarea>
                          </div>
                          <p className="text-xs text-red-500 text-right my-3">
                            Required fields are marked with an asterisk{' '}
                            <abbr title="Required field">*</abbr>
                          </p>
                          <div className="mt-5 text-right md:space-x-3 md:block flex flex-col-reverse">
                            <button
                              type="reset"
                              className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                            >
                              {' '}
                              Cancel{' '}
                            </button>
                            <button
                              type="submit"
                              className="mb-2 md:mb-0 bg-green-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-500"
                              onClick={handleSubmit}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </Box>
          )}
        </Modal>
      </div>
    </>
  )
}

export default Dashboard
