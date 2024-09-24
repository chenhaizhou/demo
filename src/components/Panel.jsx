const Panel = ({ icon, title, children, extra }) => {
  return (
    <div className="w-full">
      <div className="flex gap-2 items-center mb-4">
        {icon}
        {title && <h3 className="text-lg font-bold mr-auto">{title}</h3>}
        {extra}
      </div>
      <div className="max-w-[1000px]">{children}</div>
    </div>
  )
}

export default Panel
