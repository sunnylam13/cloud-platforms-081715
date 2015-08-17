# Style Guide

## Instructions

Use this as a template of html to insert into pages for testing different style setups...

Change the `.container` to something else like `.wrapper` as needed (if it hasn't already been changed...)...

## Reference

HY Spring Bootcamp Week 7

## The Code

	<div class="style_guide_colours">
		<h1>Style Guide</h1>

		<h2 class="section-title">Colours</h2>

		<!-- Add your own colour swatches down here! -->
		<ul class="colours">
			<li>
				<span class="swatch" style="background: #242424;"></span>		
				<p class="label">black | #242424</p>
			</li>
			<li>
				<span class="swatch" style="background: #d2774a;"></span>		
				<p class="label">orange | #d2774a</p>
			</li>
			<li>
				<span class="swatch" style="background: #ebaa71;"></span>		
				<p class="label">peach | #ebaa71</p>
			</li>
			<li>
				<span class="swatch" style="background: #128b98;"></span>		
				<p class="label">darkBlue | #128b98</p>
			</li>
			<li>
				<span class="swatch" style="background: #8bc2c9;"></span>		
				<p class="label">blue | #8bc2c9</p>
			</li>
		</ul>
	</div>
	<div class="style_guide_typography">
		<h2 class="section-title">Typography</h2>

		<div class="typography">
			<h1>This is a heading of the highest importance.</h1>
			<p>This is a sample paragraph. I do not clearly remember the arrival of the curate, so that probably I dozed. I became aware of him as a seated figure in soot-smudged shirt sleeves, and with his upturned, clean-shaven face staring at a faint flickering that danced over the sky. The sky was what is called a mackerel sky--rows and rows of faint down-plumes of cloud, just tinted with the midsummer sunset.</p>

			<h2>I'm a subheading</h2>

			<p>Paragraphs might also contain <strong>strong text</strong>, <em>emphasized text</em>, and maybe even a <a href="#">link somewhere.</a></p>

			<ul>
				<li>Behold! A List Item!</li>
				<li>Second list item that's long enough to wrap onto a second line. Long list item is loooong.</li>
				<li>This is a test of the emergency list item service.</li>
			</ul>

			<p class="intro">An introductory paragraph is a great way to summarise the content before the reader really digs into the detail of your story. With a .intro class attached, this special paragraph can have a unique text size while inheriting its other attributes from it's parent.</p>
			
			<blockquote>" This is a blockquote, an element that represents a section that is being quoted from another source."</blockquote>

			<h3>Here are some other headings you might want to use. [h3]</h3>
			<h4>You should set up some base styles for all of us. [h4]</h4>
			<h5>Me too, please![h5]</h5>
			<h6>Don't forget about little 'ol me. [h6]</h6>
		</div>
	</div>
	<div class="style_guide_forms">
		<h2 class="section-title">Forms</h2>
		<form>
			<h3 class="form-title">Form Title [.form-title]</h3>
			<label>Input Label</label>
			<input type="text" placeholder="placeholder text">
			<label>Input Label</label>
			<input type="email" placeholder="placeholder text">
			<label>Select Label</label>
			<select>
				<option>Select Option</option>
			</select>
			<label><input type="checkbox"/>Checkbox Label</label>
			<label><input type="radio"/>Radio Label</label>
			<label>Textarea Label</label>
			<textarea placeholder="placeholder" rows="10"></textarea>
			<input type="submit" value="Submit" class="button">
		</form>
	</div>
	<div class="style_guide_media">
		<h2 class="section-title">Media</h2>
		<img src="http://lorempixel.com/400/300" alt="">
		<br>
		<img src="http://fillmurray.com/200/200" alt="" class="avatar">
		<p class="label">img.avatar</p>
		<div class="video">
			<iframe src="http://player.vimeo.com/video/66105044?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
		</div>
		<p class="label">div.video iframe</p>
	</div>
	<div class="style_guide_ui_components">
		<h2 class="section-title">UI Components</h2>
		<a href="#" class="button-big">I'm a big Button! [.button-big]</a>
		<a href="#" class="button-small">I'm a small Button! [.button-small]</a>
		<a href="#" class="button-inverse">Button with a new colour scheme! [.button-inverse]</a>
		<div class="panel">
			<p>I'm a .panel of text. Use me to draw attention to important content.</p>
		</div>
	</div>

