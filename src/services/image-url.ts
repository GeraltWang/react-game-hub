const getCroppedImageUrl = (url: string) => {
  // 根据 url 中 media/ 的位置，截取 url 的前半部分，然后拼接 crop/600/400/，再拼接 url 的后半部分
	const target = 'media/'
	const index = url.indexOf(target) + target.length
	return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}

export default getCroppedImageUrl
