import ResponsiveImage from './ResponsiveImage'

const NotFoundPost = () => {
  return (
    <div className="flex h-screen flex-col items-center space-y-4">
      <div className="h-2/5 w-2/5">
        <ResponsiveImage
          src="/assets/no_post.jpg"
          alt="No Posts Found."
          className="rounded-3xl object-center"
        />
      </div>
      <p className="text-5xl font-semibold capitalize text-gray-800 dark:text-white lg:text-6xl">
        No Posts Found
      </p>
    </div>
  )
}

export default NotFoundPost
