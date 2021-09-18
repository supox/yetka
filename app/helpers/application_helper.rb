module ApplicationHelper
    def nav_link_to(name, href, cls="nav-link", active_class="active")
        link_to_unless_current(name, href, class: cls) {|name| link_to(name, href, class: "#{cls} #{active_class}")}
    end

    def image_tag(source, options = {})
        if !options[:size] # Do not overwrite size if already set by caller
            @@image_size ||= {} # Cache for image sizes
            if !@@image_size[source] # Fill cache
            @@image_size[source] = FastImage.size(::Rails.root.to_s+"/app/assets/images/#{source}", :raise_on_failure => true).join("x")
            end
            options = options.merge(:size => @@image_size[source])
        end
        super(source, options)
    end

end
