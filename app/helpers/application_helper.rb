module ApplicationHelper
	def meta_tags(hash)
		html = ''
		html += '<meta property="title" content="' + hash[:title] + '" >'
		html += '<meta name="description" content="' + hash[:description] +'" >'
		html += '<meta property="og:title" content="' + hash[:og][:title] + '" >'
		html += '<meta property="og:description" content="' + hash[:og][:description] + '" >'
		html += '<meta property="og:url" content="' + hash[:og][:url] + '" >'
		html += '<meta property="og:image" content="' + hash[:og][:image][:url] + '" >'
		html += '<meta property="og:image:type" content="' + hash[:og][:image][:type] + '" >'
		html += '<meta property="og:image:width" content="' + hash[:og][:image][:width] + '" >'
		html += '<meta property="og:image:height" content="' + hash[:og][:image][:height] + '" >'
		html += '<meta property="og:locale" content="' + hash[:og][:locale][:main] + '" >'
		html += '<meta property="og:locale:alternate" content="' + hash[:og][:locale][:alternate] + '" >'
		html.html_safe

	end
end
