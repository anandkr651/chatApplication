
function Profile({user}) {
  return (
    <div className="flex px-5 py-2 hover:bg-slate-700 duration-300 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="ml-2">
          <h1 className="text-xl italic font-bold ">user.fullname</h1>
          <span className="font-medium ">user.email</span>
        </div>
      </div>
  )
}

export default Profile
